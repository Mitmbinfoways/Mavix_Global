import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
// Service Pages
import Bookkeeping from "./pages/services/Bookkeeping";
import BasPreparation from "./pages/services/BasPreparation";
import AccountingOutsourcing from "./pages/services/AccountingOutsourcing";
import AccountingFinalisation from "./pages/services/AccountingFinalisation";
import PayrollOutsourcing from "./pages/services/PayrollOutsourcing";
import SmsCompliance from "./pages/services/SmsCompliance";
import AuditSupport from "./pages/services/AuditSupport";
import EmployeePayroll from "./pages/services/EmployeePayroll";
import TaxPreparation from "./pages/services/TaxPreparation";
import Placeholder from "./pages/Placeholder";
// Software Pages
import Xero from "./pages/software/Xero";
import QuickBooks from "./pages/software/QuickBooks";
import Sage from "./pages/software/Sage";
import MYOB from "./pages/software/MYOB";
import FreshBooks from "./pages/software/FreshBooks";
import CloudAccounting from "./pages/software/CloudAccounting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* Service Routes */}
          <Route path="/services/bookkeeping" element={<Bookkeeping />} />
          <Route path="/services/bas-preparation" element={<BasPreparation />} />
          <Route path="/services/accounting-outsourcing" element={<AccountingOutsourcing />} />
          <Route path="/services/accounting-finalisation" element={<AccountingFinalisation />} />
          <Route path="/services/payroll-outsourcing" element={<PayrollOutsourcing />} />
          <Route path="/services/sms-compliance" element={<SmsCompliance />} />
          <Route path="/services/audit-support" element={<AuditSupport />} />
          <Route path="/services/employee-payroll" element={<EmployeePayroll />} />
          <Route path="/services/tax-preparation" element={<TaxPreparation />} />

          {/* Software Routes */}
          <Route path="/software/xero" element={<Xero />} />
          <Route path="/software/quickbooks" element={<QuickBooks />} />
          <Route path="/software/sage" element={<Sage />} />
          <Route path="/software/myob" element={<MYOB />} />
          <Route path="/software/freshbooks" element={<FreshBooks />} />
          <Route path="/software/cloud-based" element={<CloudAccounting />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
