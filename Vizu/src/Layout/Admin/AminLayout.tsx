import { Outlet, NavLink } from "react-router-dom";
import {
    Sidebar,
    SidebarContent,
    SidebarProvider,
    SidebarInset,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";

const AdminLayout = () => {
    return (
        <SidebarProvider>
            <Sidebar>
                {/* Header */}
                <SidebarHeader className="px-4 py-3 text-lg font-semibold">
                    Admin Panel
                </SidebarHeader>

                {/* Menu */}
                <SidebarContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <NavLink to="/admin">
                                    Dashboard
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <NavLink to="/admin/products">
                                    Products
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <NavLink to="/admin/orders">
                                    Orders
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <NavLink to="/admin/users">
                                    Users
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <NavLink to="/admin/settings">
                                    Settings
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>

            {/* Page Content */}
            <SidebarInset>
                <main className="p-6 bg-gray-50 min-h-screen">
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default AdminLayout;
