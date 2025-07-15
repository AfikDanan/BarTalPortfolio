import React from 'react';
import { Project } from '../../types';
import { Edit2, Trash2, Star, Calendar, User, ExternalLink } from 'lucide-react';

interface ProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (projectId: string) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, onEdit, onDelete }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'mobile': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'web': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'complex-systems': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  if (projects.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
        <div className="space-y-3">
          <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <ExternalLink className="w-6 h-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">No projects yet</h3>
          <p className="text-gray-500">Create your first project to get started.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {project.client}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 4).map((tool, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      +{project.tools.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => onEdit(project)}
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Edit project"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(project.id)}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete project"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Project Image Preview */}
            <div className="mt-4">
              <div className="aspect-video w-32 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};