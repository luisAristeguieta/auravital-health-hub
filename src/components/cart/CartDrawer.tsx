import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Download,
  Landmark,
  Minus,
  Package,
  Plus,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { bankAccounts, currency } from "@/data/auravital";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface CartDrawerProps {
  onGoToCatalog?: () => void;
}

export function CartDrawer({ onGoToCatalog }: CartDrawerProps) {
  const {
    items,
    totalItems,
    subtotal,
    tax,
    total,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();
  const { user } = useAuth();

  const [checkoutStep, setCheckoutStep] = useState<"cart" | "payment" | "success">("cart");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "transfer">("card");
  const [deliveryForm, setDeliveryForm] = useState({
    name: user?.name || "Carlos Mendoza",
    email: user?.email || "paciente@auravital.com",
    phone: user?.phone || "+593 98 445 1120",
    city: "Quito",
    address: "Av. Amazonas N34-12 y República",
    notes: "Entregar en horario de oficina",
  });
  const [cardForm, setCardForm] = useState({
    number: "4532 •••• •••• 8812",
    holder: user?.name || "CARLOS MENDOZA",
    expiry: "09/29",
    cvv: "345",
  });
  const [transferReceipt, setTransferReceipt] = useState<string | null>("comprobante_banco_pichincha_08912.pdf");
  const [generatedOrderNumber, setGeneratedOrderNumber] = useState<string>("");

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeCart();
      // Reset checkout state after closing
      setTimeout(() => setCheckoutStep("cart"), 300);
    }
  };

  const handleConfirmPurchase = () => {
    const orderNum = `FAC-${Math.floor(10000 + Math.random() * 90000)}`;
    setGeneratedOrderNumber(orderNum);
    setCheckoutStep("success");
    toast.success(`¡Pedido ${orderNum} generado y confirmado con éxito!`);
  };

  const handleFinish = () => {
    clearCart();
    closeCart();
    setCheckoutStep("cart");
  };

  return (
    <Dialog open={isCartOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-[540px] p-0 bg-card border shadow-2xl">
        {/* CABECERA */}
        <div className="bg-gradient-to-r from-primary/15 via-rose-500/10 to-transparent p-5 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold text-foreground">
                  {checkoutStep === "cart" && "Carrito de Compras Terapéutico"}
                  {checkoutStep === "payment" && "Pasarela de Pago & Despacho"}
                  {checkoutStep === "success" && "¡Pedido Confirmado!"}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  {checkoutStep === "cart" && `${totalItems} productos seleccionados para tu salud`}
                  {checkoutStep === "payment" && "Completa tus datos de entrega y método de pago"}
                  {checkoutStep === "success" && "Tu orden médica está en proceso de despacho"}
                </DialogDescription>
              </div>
            </div>

            {checkoutStep === "cart" && items.length > 0 && (
              <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                {totalItems} {totalItems === 1 ? "artículo" : "artículos"}
              </Badge>
            )}
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL SEGÚN EL PASO */}
        <div className="p-5 space-y-4">
          {/* PASO 1: LISTA DEL CARRITO */}
          {checkoutStep === "cart" && (
            <>
              {items.length === 0 ? (
                <div className="py-12 text-center space-y-4">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-muted text-muted-foreground mx-auto">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-foreground text-base">Tu carrito está vacío</p>
                    <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                      Explora nuestras camillas de jade, masajeadores térmicos y equipos EMS en el catálogo.
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      closeCart();
                      onGoToCatalog?.();
                    }}
                    className="rounded-xl bg-primary text-primary-foreground font-bold text-xs"
                  >
                    Ver Catálogo de Equipos
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Lista de productos */}
                  <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
                    {items.map(({ product, quantity }) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-3.5 p-3 rounded-2xl border bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-16 w-16 rounded-xl object-cover border bg-muted shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.opacity = "0";
                          }}
                        />

                        <div className="min-w-0 flex-1 space-y-1">
                          <p className="font-bold text-sm text-foreground truncate">{product.name}</p>
                          <p className="text-xs font-semibold text-primary">{currency(product.price)} c/u</p>
                          <p className="text-[10px] text-muted-foreground">Stock disp: {product.stock}</p>
                        </div>

                        {/* Controles de cantidad */}
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <div className="flex items-center gap-1 border rounded-lg bg-card p-0.5 shadow-xs">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 rounded-md hover:bg-muted"
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-6 text-center text-xs font-bold text-foreground">{quantity}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 rounded-md hover:bg-muted"
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                            className="text-muted-foreground hover:text-destructive text-[11px] flex items-center gap-1 transition-colors"
                          >
                            <Trash2 className="h-3 w-3" /> Eliminar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Resumen de costos */}
                  <div className="p-4 rounded-2xl border bg-card space-y-2 text-xs">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>Subtotal de productos:</span>
                      <span className="font-medium text-foreground">{currency(subtotal)}</span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>IVA (15% Ecuador):</span>
                      <span className="font-medium text-foreground">{currency(tax)}</span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Truck className="h-3.5 w-3.5 text-emerald-600" /> Envío a domicilio:
                      </span>
                      <span className="font-bold text-emerald-600">¡GRATIS!</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center justify-between text-base font-black text-foreground">
                      <span>Total a Pagar:</span>
                      <span className="text-primary text-xl font-extrabold">{currency(total)}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <Button
                      onClick={() => setCheckoutStep("payment")}
                      className="w-full h-11 rounded-xl bg-primary text-primary-foreground font-bold shadow-md hover:bg-primary/90 text-sm"
                    >
                      Proceder al Pago ({currency(total)})
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        closeCart();
                        onGoToCatalog?.();
                      }}
                      className="text-xs text-muted-foreground"
                    >
                      Seguir Comprando
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* PASO 2: FORMULARIO DE PAGO & DESPACHO */}
          {checkoutStep === "payment" && (
            <div className="space-y-4">
              {/* Datos de envío */}
              <div className="p-4 rounded-2xl border bg-muted/20 space-y-3">
                <p className="font-bold text-xs flex items-center gap-1.5 text-foreground uppercase tracking-wider">
                  <Truck className="h-3.5 w-3.5 text-primary" /> 1. Datos de Envío y Despacho
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-[11px]">Nombres del Receptor</Label>
                    <Input
                      value={deliveryForm.name}
                      onChange={(e) => setDeliveryForm({ ...deliveryForm, name: e.target.value })}
                      className="h-8 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[11px]">WhatsApp de Contacto</Label>
                    <Input
                      value={deliveryForm.phone}
                      onChange={(e) => setDeliveryForm({ ...deliveryForm, phone: e.target.value })}
                      className="h-8 text-xs"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <Label className="text-[11px]">Ciudad</Label>
                    <Input
                      value={deliveryForm.city}
                      onChange={(e) => setDeliveryForm({ ...deliveryForm, city: e.target.value })}
                      className="h-8 text-xs"
                    />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <Label className="text-[11px]">Dirección de Entrega</Label>
                    <Input
                      value={deliveryForm.address}
                      onChange={(e) => setDeliveryForm({ ...deliveryForm, address: e.target.value })}
                      className="h-8 text-xs"
                      placeholder="Calle Principal y Secundaria"
                    />
                  </div>
                </div>
              </div>

              {/* Selector de método de pago */}
              <div className="p-4 rounded-2xl border bg-card space-y-3">
                <p className="font-bold text-xs flex items-center gap-1.5 text-foreground uppercase tracking-wider">
                  <CreditCard className="h-3.5 w-3.5 text-primary" /> 2. Método de Pago
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={cn(
                      "flex items-center gap-2 p-3 rounded-xl border text-left transition-all text-xs font-semibold",
                      paymentMethod === "card"
                        ? "border-primary bg-primary/10 text-primary shadow-xs"
                        : "border-border hover:bg-muted text-muted-foreground"
                    )}
                  >
                    <CreditCard className="h-4 w-4 shrink-0" />
                    <div>
                      <p className="font-bold">Tarjeta de Crédito</p>
                      <p className="text-[10px] opacity-80">Visa / Mastercard / Diners</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("transfer")}
                    className={cn(
                      "flex items-center gap-2 p-3 rounded-xl border text-left transition-all text-xs font-semibold",
                      paymentMethod === "transfer"
                        ? "border-primary bg-primary/10 text-primary shadow-xs"
                        : "border-border hover:bg-muted text-muted-foreground"
                    )}
                  >
                    <Landmark className="h-4 w-4 shrink-0" />
                    <div>
                      <p className="font-bold">Transferencia</p>
                      <p className="text-[10px] opacity-80">Pichincha / Produbanco</p>
                    </div>
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="p-3.5 rounded-xl border bg-muted/30 space-y-2.5 pt-3">
                    <div className="space-y-1">
                      <Label className="text-[11px]">Número de Tarjeta</Label>
                      <Input
                        value={cardForm.number}
                        onChange={(e) => setCardForm({ ...cardForm, number: e.target.value })}
                        className="h-8 text-xs font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <Label className="text-[11px]">Vencimiento</Label>
                        <Input
                          value={cardForm.expiry}
                          onChange={(e) => setCardForm({ ...cardForm, expiry: e.target.value })}
                          className="h-8 text-xs font-mono text-center"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-[11px]">CVV</Label>
                        <Input
                          value={cardForm.cvv}
                          onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value })}
                          className="h-8 text-xs font-mono text-center"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "transfer" && (
                  <div className="p-3.5 rounded-xl border bg-muted/30 space-y-2.5 text-xs">
                    <p className="font-bold text-foreground">Cuentas Habilitadas de AuraVital S.A.:</p>
                    <div className="space-y-1 text-[11px] text-muted-foreground">
                      <p>• <strong>Banco Pichincha:</strong> Cta Cte 2100 4455 82 (RUC: 1792845560001)</p>
                      <p>• <strong>Produbanco:</strong> Cta Ahorros 1204 9987 33 (RUC: 1792845560001)</p>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[11px] flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>Comprobante listo: <strong>{transferReceipt}</strong></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Botones de acción */}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={() => setCheckoutStep("cart")}
                  className="w-1/3 rounded-xl text-xs"
                >
                  Volver al Carrito
                </Button>
                <Button
                  onClick={handleConfirmPurchase}
                  className="w-2/3 h-10 rounded-xl bg-primary text-primary-foreground font-bold shadow-md hover:bg-primary/90 text-xs"
                >
                  Confirmar Pago ({currency(total)})
                </Button>
              </div>
            </div>
          )}

          {/* PASO 3: ÉXITO Y CONFIRMACIÓN */}
          {checkoutStep === "success" && (
            <div className="py-6 text-center space-y-4">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <div className="space-y-1">
                <Badge className="bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 text-xs">
                  {generatedOrderNumber}
                </Badge>
                <h3 className="text-xl font-bold text-foreground">¡Muchas Gracias por tu Compra!</h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Hemos enviado la confirmación y la factura electrónica a <strong>{deliveryForm.email}</strong>.
                  El Administrador de AuraVital ya está procesando tu despacho a <strong>{deliveryForm.city}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-muted/40 text-xs text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Destinatario:</span>
                  <span className="font-bold text-foreground">{deliveryForm.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dirección:</span>
                  <span className="font-medium text-foreground">{deliveryForm.address}, {deliveryForm.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Método:</span>
                  <span className="font-medium text-foreground">
                    {paymentMethod === "card" ? "Tarjeta de Crédito (Aprobado)" : "Transferencia Bancaria (Verificada)"}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-sm">
                  <span>Monto Total Facturado:</span>
                  <span className="text-primary font-black">{currency(total)}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <Button
                  onClick={handleFinish}
                  className="w-full h-10 rounded-xl bg-primary text-primary-foreground font-bold text-xs"
                >
                  Finalizar y Volver a la Tienda
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
