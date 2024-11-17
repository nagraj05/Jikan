import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "../components/AppSidebar";
import Header from "../components/Header";

export default function layout({ children }) {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full h-full ">
          <div className="flex gap-2 items-center">
            <SidebarTrigger />
            <Header />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
