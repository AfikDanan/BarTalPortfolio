import React, { useState, useEffect } from 'react';
import { Project } from '../../types';
import { Save, X, Upload, Star } from 'lucide-react';

interface ProjectFormProps {
  project?: Project | null;
  onSave: (project: Omit<Project, 'id'>) => void;
  onCancel: () => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    description: '',
    overview: '',
    role: '',
    process: '',
    tools: [] as string[],
    impact: '',
    imageUrl: '',
    detailImages: [] as string[],
    category: 'cybersecurity' as 'cybersecurity' | 'engineering' | 'portal',
    category: 'mobile' as 'mobile' | 'web' | 'complex-systems',
    year: new Date().getFullYear().toString(),
    featured: false
  });

  const [toolInput, setToolInput] = useState('');
  const [imageInput, setImageInput] = useState('');

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        client: project.client,
        description: project.description,
        overview: project.overview,
        role: project.role,
        process: project.process,
        tools: project.tools,
        impact: project.impact,
        imageUrl: project.imageUrl,
        detailImages: project.detailImages,
        category: project.category,
        year: project.year,
        featured: project.featured
      });
    }
  }, [project]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const addTool = () => {
    if (toolInput.trim() && !formData.tools.includes(toolInput.trim())) {
      setFormData(prev => ({ ...prev, tools: [...prev.tools, toolInput.trim()] }));
      setToolInput('');
    }
  };

  const removeTool = (tool: string) => {
    setFormData(prev => ({ ...prev, tools: prev.tools.filter(t => t !== tool) }));
  };

  const addDetailImage = () => {
    if (imageInput.trim() && !formData.detailImages.includes(imageInput.trim())) {
      setFormData(prev => ({ ...prev, detailImages: [...prev.detailImages, imageInput.trim()] }));
      setImageInput('');
    }
  };

  const removeDetailImage = (image: string) => {
    setFormData(prev => ({ ...prev, detailImages: prev.detailImages.filter(i => i !== image) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          {project ? 'Edit Project' : 'Create New Project'}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client
            </label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="mobile">Mobile Apps</option>
              <option value="web">Web Design</option>
              <option value="complex-systems">Complex Systems</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year
            </label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700 flex items-center">
                <Star className="w-4 h-4 mr-1" />
                Featured
              </span>
            </label>
          </div>
        </div>

        {/* Descriptions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Short Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Overview
          </label>
          <textarea
            name="overview"
            value={formData.overview}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              My Role
            </label>
            <textarea
              name="role"
              value={formData.role}
              onChange={handleChange}
              rows={3}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Process & Methods
            </label>
            <textarea
              name="process"
              value={formData.process}
              onChange={handleChange}
              rows={3}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Impact & Results
          </label>
          <textarea
            name="impact"
            value={formData.impact}
            onChange={handleChange}
            rows={3}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Tools */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tools & Technologies
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={toolInput}
              onChange={(e) => setToolInput(e.target.value)}
              placeholder="Add a tool (e.g., Figma)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTool())}
            />
            <button
              type="button"
              onClick={addTool}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-1"
              >
                {tool}
                <button
                  type="button"
                  onClick={() => removeTool(tool)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Main Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            placeholder="https://example.com/image.jpg"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Detail Images
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="url"
              value={imageInput}
              onChange={(e) => setImageInput(e.target.value)}
              placeholder="https://example.com/detail-image.jpg"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addDetailImage())}
            />
            <button
              type="button"
              onClick={addDetailImage}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1"
            >
              <Upload className="w-4 h-4" />
              Add
            </button>
          </div>
          <div className="space-y-2">
            {formData.detailImages.map((image, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <img src={image} alt={`Detail ${index + 1}`} className="w-16 h-12 object-cover rounded" />
                <span className="flex-1 text-sm text-gray-600 truncate">{image}</span>
                <button
                  type="button"
                  onClick={() => removeDetailImage(image)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {project ? 'Update Project' : 'Create Project'}
          </button>
        </div>
      </form>
    </div>
  );
};