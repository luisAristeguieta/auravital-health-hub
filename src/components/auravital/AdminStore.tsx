import { useState } from "react";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { currency, initialProducts, type Product } from "@/data/auravital";
import { toast } from "sonner";

type CartLine = { product: Product; qty: number };

export function AdminStore() {
  const [products] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [buyer, setBuyer] = useState("");

  const add = (product: Product) =>
    setCart((prev) => {
      const found = prev.find((l) => l.product.id === product.id);
      if (found) return prev.map((l) => (l.product.id === product.id ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { product, qty: 1 }];
    });

  const dec = (id: string) =>
    setCart((prev) =>
      prev.flatMap((l) => (l.product.id === id ? (l.qty > 1 ? [{ ...l, qty: l.qty - 1 }] : []) : [l])),
    );

  const total = cart.reduce((a, l) => a + l.product.price * l.qty, 0);
  const revenue = products.reduce((a, p) => a + p.price * p.sold, 0);
  const profit = products.reduce((a, p) => a + (p.price - p.cost) * p.sold, 0);

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <Card key={p.id} className="gap-2 p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold leading-snug">{p.name}</p>
                <Badge variant="secondary" className="shrink-0">Stock {p.stock}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{p.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">{currency(p.price)}</span>
                <Button size="sm" onClick={() => add(p)}>
                  <Plus className="h-4 w-4" /> Agregar
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="h-fit gap-4 p-5">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <ShoppingCart className="h-4 w-4 text-primary" /> Venta directa
          </p>
          <div className="space-y-2">
            <Label htmlFor="buyer">Paciente / Cliente</Label>
            <Input id="buyer" value={buyer} onChange={(e) => setBuyer(e.target.value)} placeholder="Nombre del paciente" />
          </div>
          <Separator />
          {cart.length === 0 ? (
            <p className="py-4 text-center text-sm text-muted-foreground">Carrito vacío</p>
          ) : (
            <ul className="space-y-3">
              {cart.map((l) => (
                <li key={l.product.id} className="flex items-center gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{l.product.name}</p>
                    <p className="text-xs text-muted-foreground">{currency(l.product.price)} c/u</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => dec(l.product.id)}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center text-sm">{l.qty}</span>
                    <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => add(l.product)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="text-xl font-semibold">{currency(total)}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setCart([])} disabled={!cart.length}>
              <Trash2 className="h-4 w-4" /> Vaciar
            </Button>
            <Button
              className="flex-1"
              disabled={!cart.length}
              onClick={() => {
                toast.success(`Venta registrada por ${currency(total)}${buyer ? ` a ${buyer}` : ""}`);
                setCart([]);
                setBuyer("");
              }}
            >
              Registrar venta
            </Button>
          </div>
        </Card>
      </div>

      <Card className="gap-0 p-0">
        <div className="border-b p-5">
          <p className="text-sm font-semibold">Reporte de ventas de productos</p>
          <p className="text-xs text-muted-foreground">
            Ingresos {currency(revenue)} · Ganancia neta {currency(profit)}
          </p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Producto</TableHead>
                <TableHead className="text-right">Precio</TableHead>
                <TableHead className="text-right">Costo</TableHead>
                <TableHead className="text-right">Unidades</TableHead>
                <TableHead className="text-right">Ingresos</TableHead>
                <TableHead className="text-right">Ganancia</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell className="text-right">{currency(p.price)}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{currency(p.cost)}</TableCell>
                  <TableCell className="text-right">{p.sold}</TableCell>
                  <TableCell className="text-right">{currency(p.price * p.sold)}</TableCell>
                  <TableCell className="text-right font-medium text-primary">
                    {currency((p.price - p.cost) * p.sold)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
