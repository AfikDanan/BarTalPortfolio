import React from 'react';
import { CheckCircle, Award, Users, Target, Figma, Search, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Delivering high-quality designs even under pressure, focusing on measurable outcomes'
    },
    {
      icon: CheckCircle,
      title: 'Client Success',
      description: 'Designed solutions that directly led to contract renewals by meeting business and user goals'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative team player with strong initiative and sense of ownership'
    },
    {
      icon: Award,
      title: 'Specialized Expertise',
      description: 'Deep experience in complex systems UI for cybersecurity and engineering sectors'
    }
  ];

  const skillCategories = [
    {
      title: 'Design Tools',
      icon: Figma,
      color: 'from-blue-500 to-blue-600',
      skills: ['Figma', 'Photoshop', 'Illustrator', 'Principle']
    },
    {
      title: 'UX Methods',
      icon: Search,
      color: 'from-purple-500 to-purple-600',
      skills: ['UX Research',  'Prototyping', 'Usability Testing',  'Wireframing']
    },
    {
      title: 'Specializations',
      icon: Shield,
      color: 'from-emerald-500 to-emerald-600',
      skills: ['Complex Systems', 'Mobile App Design', 'Web Design', 'Responsive Design',]
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hi, I'm Bar Tal – a UX/UI designer with 3 years of industry experience
              transforming complex challenges into intuitive digital experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Profile Text */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="prose prose-lg mx-auto">
                <p className="text-gray-700 leading-relaxed text-lg">
                  I specialize in crafting user-centered designs for mission-critical systems—where complexity meets                           clarity. My work spans cybersecurity platforms, engineering tools, and enterprise portals, with a focus on                   creating intuitive experiences in environments where every interaction counts. 
               </p> <br/>
                <p className="text-gray-700 leading-relaxed text-lg">
                   In my role as a lead designer, I’ve driven end-to-end design initiatives that not only improved                              usability, but also delivered measurable business impact—including contract renewals and boosts in user                      adoption. I’m a proactive, collaborative designer who thrives on solving tough UX challenges and                             translating them into clean, effective interfaces.matters.
                </p>
              </div>
            </div>

            {/* Highlights Grid 
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{highlight.title}</h4>
                        <p className="text-sm text-gray-600 mt-2">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>*/}

            {/* Skills Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills & Expertise</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A comprehensive toolkit for designing complex, user-centered digital experiences
                </p>
              </div>

              {/* Skills Categories */}
              <div className="grid lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  
                  return (
                    <div key={index} className="relative group">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                      
                      {/* Content */}
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="space-y-6">
                          {/* Category Header */}
                          <div className="text-center space-y-3">
                            <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900">{category.title}</h4>
                          </div>

                          {/* Skills Grid */}
                          <div className="grid grid-cols-2 gap-3">
                            {category.skills.map((skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className="text-center p-3 bg-gray-50/80 rounded-lg hover:bg-white/90 transition-colors group/skill"
                              >
                                <span className="text-sm font-medium text-gray-700 group-hover/skill:text-gray-900 transition-colors">
                                  {skill}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Design Methodologies */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Design Methodologies</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Design Thinking',
                  'Agile/Scrum',
                  'User-Centered Design',
                  'Design Systems',
                  'Accessibility (WCAG)',
                  'Mobile-First Design',
                  'Component-Based Design'
                ].map((method, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-colors">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};