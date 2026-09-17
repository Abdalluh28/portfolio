import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "@/components/Navbar";
import { AppProvider } from "@/context/AppContext";
import ContributionsPage from "@/features/contributions/ContributionsPage";
import HomePage from "@/features/home/HomePage";
import ProjectDetailPage from "@/features/projects/ProjectDetailPage";
import ProjectsPage from "@/features/projects/ProjectsPage";

function AppContent() {
    return (
        <div className="min-h-screen bg-bg text-fg">
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                <Route path="/contributions" element={<ContributionsPage />} />
            </Routes>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <AppContent />
            </AppProvider>
        </BrowserRouter>
    );
}
