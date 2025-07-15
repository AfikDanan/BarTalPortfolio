import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { ParticleBackground } from './components/ParticlesBackground'
import { LandingSection } from './components/LandingSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AdminPanel } from './components/admin/AdminPanel';
import { AdminLogin } from './components/admin/AdminLogin';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { initialProjects } from './data/InitialProjects';
import { Project } from './types';

function App() {
  const [projects, setProjects] = useLocalStorage<Project[]>('portfolio-projects', initialProjects);
  const [isAdmin, setIsAdmin] = useLocalStorage<boolean>('portfolio-admin', false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const { scrollY, currentSection } = useScrollAnimation();

  // Admin authentication
  const handleAdminLogin = (username: string, password: string): boolean => {
    // Simple demo authentication - in production, use proper authentication
    if (username === 'admin' && password === 'password') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
  };

  const handleAdminToggle = () => {
    if (isAdmin) {
      handleAdminLogout();
    } else {
      // Show login form in admin mode
      setIsAdmin(null as any); // Trigger login form
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  const handleCloseProjectModal = () => {
    setShowProjectModal(false);
    setSelectedProject(null);
  };

  const handleSectionClick = (section: string) => {
    // This is handled by the navigation component
  };

  // Show admin login if admin state is explicitly null
  if (isAdmin === null) {
    return <AdminLogin onLogin={handleAdminLogin} />;
  }

  // Show admin panel if user is authenticated as admin
  if (isAdmin === true) {
    return (
      <AdminPanel
        projects={projects}
        onProjectsChange={setProjects}
        onLogout={handleAdminLogout}
      />
    );
  }

  // Main portfolio website
  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>
      
      {/* Navigation */}
      <Navigation
        isAdmin={isAdmin}
        onAdminToggle={handleAdminToggle}
        onSectionClick={handleSectionClick}
        currentSection={currentSection}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <LandingSection onSectionClick={handleSectionClick} />
        <AboutSection />
        <ProjectsSection 
          projects={projects} 
          onProjectClick={handleProjectClick}
        />
        <ContactSection />
      </main>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={showProjectModal}
        onClose={handleCloseProjectModal}
      />

      {/* Global Styles */}
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;