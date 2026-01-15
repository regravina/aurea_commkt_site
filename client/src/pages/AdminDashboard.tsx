import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Loader2, LogOut, DollarSign, ShoppingBag, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import { useState, useMemo } from "react";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [, navigate] = useLocation();

  // Redirecionar se não for admin
  if (user && user.role !== "admin") {
    navigate("/");
    return null;
  }

  // Buscar dados de vendas
  const { data: orders = [], isLoading } = trpc.orders.getUserOrders.useQuery(
    undefined,
    { enabled: !!user }
  );

  const [filterStatus, setFilterStatus] = useState<string>("all");

  // Calcular estatísticas
  const stats = useMemo(() => {
    const filteredOrders = filterStatus === "all" 
      ? orders 
      : orders.filter(o => o.status === filterStatus);

    const totalSales = filteredOrders.reduce((sum, o) => sum + (o.amount || 0), 0);
    const approvedCount = orders.filter(o => o.status === "approved").length;
    const pendingCount = orders.filter(o => o.status === "pending").length;

    return {
      totalOrders: orders.length,
      totalSales: (totalSales / 100).toFixed(2),
      approvedCount,
      pendingCount,
      filteredOrders,
    };
  }, [orders, filterStatus]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-teal-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Carregando dados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
            <p className="text-sm text-gray-600 mt-1">Bem-vindo, {user?.name || "Admin"}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total de Vendas */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4" style={{ borderColor: "#D4AF37" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total de Vendas</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  R$ {stats.totalSales}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6" style={{ color: "#D4AF37" }} />
              </div>
            </div>
          </div>

          {/* Pedidos Aprovados */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pedidos Aprovados</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.approvedCount}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          {/* Pedidos Pendentes */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pedidos Pendentes</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.pendingCount}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Filtrar Pedidos</h2>
          <div className="flex gap-2 flex-wrap">
            {["all", "pending", "approved", "failed"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg transition font-medium text-sm ${
                  filterStatus === status
                    ? "text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={
                  filterStatus === status ? { backgroundColor: "#D4AF37" } : {}
                }
              >
                {status === "all"
                  ? "Todos"
                  : status === "pending"
                  ? "Pendentes"
                  : status === "approved"
                  ? "Aprovados"
                  : "Falhas"}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">
              Pedidos ({stats.filteredOrders.length})
            </h2>
          </div>

          {stats.filteredOrders.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-600">Nenhum pedido encontrado</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      E-mail
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Valor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Método
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {stats.filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        #{order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.customerName || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {order.customerEmail || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        R$ {(order.amount / 100).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {order.paymentMethod || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : order.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {order.status === "approved"
                            ? "Aprovado"
                            : order.status === "pending"
                            ? "Pendente"
                            : "Falha"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(order.createdAt).toLocaleDateString("pt-BR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
