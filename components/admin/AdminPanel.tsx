import React, { useState } from 'react';
import { Project } from '../../types';
import { ProjectForm } from './ProjectForm';
import { ProjectList } from './ProjectList';
import { Plus, FileText, Settings, LogOut } from 'lucide-react';

interface AdminPanelProps {
  projects: Project[];
  onProjectsChange: (projects: Project[]) => void;
  onLogout: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ projects, onProjectsChange, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'settings'>('projects');
  const [isCreating, setIsCreating] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleSaveProject = (projectData: Omit<Project, 'id'>) => {
    if (editingProject) {
      // Update existing project
      const updatedProjects = projects.map(p => 
        p.id === editingProject.id 
          ? { ...projectData, id: editingProject.id }
          : p
      );
      onProjectsChange(updatedProjects);
      setEditingProject(null);
    } else {
      // Create new project
      const newProject: Project = {
        ...projectData,
        id: Date.now().toString()
      };
      onProjectsChange([...projects, newProject]);
      setIsCreating(false);
    }
  };

  const handleDeleteProject = (projectId: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(p => p.id !== projectId);
      onProjectsChange(updatedProjects);
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setIsCreating(false);
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingProject(null);
  };

  const tabs = [
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-600">Manage your portfolio content</p>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'projects' | 'settings')}
                  className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {/* Projects Header */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
                <p className="text-gray-600">Manage your portfolio projects</p>
              </div>
              {!isCreating && !editingProject && (
                <button
                  onClick={() => setIsCreating(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Project</span>
                </button>
              )}
            </div>

            {/* Content */}
            {isCreating || editingProject ? (
              <ProjectForm
                project={editingProject}
                onSave={handleSaveProject}
                onCancel={handleCancel}
              />
            ) : (
              <ProjectList
                projects={projects}
                onEdit={handleEditProject}
                onDelete={handleDeleteProject}
              />
            )}
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <p className="text-gray-600">Settings panel coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};