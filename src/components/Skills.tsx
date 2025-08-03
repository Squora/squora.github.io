import React from 'react';
import '../styles/Skills.scss';

type SkillItem = {
  skill: string;
  level: keyof typeof levelColors;
  // Вложенные items возможны только в разделе "Databases"
  items?: SkillItem[];
};

type Subcategory = {
  subcategory: string;
  items: (SkillItem | SkillItemWithChildren)[];
};

type SkillItemWithChildren = {
  skill: string;
  items: SkillItem[];
};

type SkillsCategory = {
  category: string;
  skills: Subcategory[];
};

const levelColors = {
  high: '#28a745',
  medium: '#ffc107',
  low: '#ff5722',
  lowest: '#dc3545',
};

const skillsData: SkillsCategory[] = [
    {
      category: 'Technical Skills',
      skills: [
        {
          subcategory: 'Programming Languages',
          items: [
            { skill: 'PHP', level: 'high' },
            { skill: 'C#', level: 'high' },
            { skill: 'Go', level: 'low' },
            { skill: 'JavaScript', level: 'lowest' },
            { skill: 'TypeScript', level: 'lowest'},
          ],
        },
        {
          subcategory: 'Frameworks and Libraries',
          items: [
            { skill: 'Laminas', level: 'high' },
            { skill: 'Symfony', level: 'medium' },
            { skill: '.NET Core', level: 'medium' },
            { skill: 'jQuery', level: 'lowest' },
            { skill: 'React', level: 'lowest' },
          ],
        },
        {
          subcategory: 'Architectures, Principles and Patterns',
          items: [
            { skill: 'Microservices Architecture', level: 'high' },
            { skill: 'Replication', level: 'medium' },
            { skill: 'Load Balancer', level: 'medium' },
            { skill: 'OOP', level: 'high' },
            { skill: 'SOLID', level: 'high' },
            { skill: 'MVC', level: 'medium' },
            { skill: 'KISS', level: 'medium' },
            { skill: 'DRY', level: 'medium' },
            { skill: 'YAGNI', level: 'medium' },
            { skill: 'Patterns', level: 'medium' },
          ],
        },
        {
          subcategory: 'Databases',
          items: [
            {
              skill: 'SQL Databases',
              items: [
                { skill: 'MySQL', level: 'medium' },
                { skill: 'MSSQL', level: 'medium' },
                { skill: 'PostgreSQL', level: 'medium' },
              ],
            },
            {
              skill: 'NoSQL Databases',
              items: [
                { skill: 'MongoDB', level: 'medium' },
                { skill: 'Cassandra', level: 'low' },
                { skill: 'Redis', level: 'low' },
                { skill: 'Firebase', level: 'low' },
              ],
            },
            { skill: 'Migrations', level: 'medium' },
            { skill: 'Sharding', level: 'medium' },
            { skill: 'Transactions', level: 'medium' },
            { skill: 'Replication', level: 'medium' },
            { skill: 'Normalization and denormalization', level: 'medium' },
            { skill: 'Indexing', level: 'medium' },
            { skill: 'ACID', level: 'medium' },
            { skill: 'Explain', level: 'medium' },
          ],
        },
        {
          subcategory: 'Message Brokers',
          items: [
            { skill: 'Gearman', level: 'low' },
            { skill: 'Beanstalkd', level: 'low' },
            { skill: 'Kafka', level: 'medium' },
          ],
        },
        {
          subcategory: 'Web Servers',
          items: [
            { skill: 'nginx', level: 'medium' },
            { skill: 'Apache', level: 'low' },
          ],
        },
        {
          subcategory: 'Containerization and Orchestration',
          items: [
            { skill: 'Docker', level: 'high' },
            { skill: 'Docker Compose', level: 'high' },
            { skill: 'Kubernetes (k8s)', level: 'medium' },
            { skill: 'Makefile', level: 'low' },
            { skill: 'LXD and LXC', level: 'low' },
          ],
        },
        {
          subcategory: 'Internet Protocols',
          items: [
            { skill: 'gRPC', level: 'medium' },
            { skill: 'HTTP', level: 'high' },
            { skill: 'REST', level: 'high' },
            { skill: 'Websockets', level: 'medium' },
          ],
        },
        {
          subcategory: 'Internet',
          items: [
            { skill: 'Browsers', level: 'high' },
            { skill: 'DNS', level: 'medium' },
            { skill: 'API', level: 'high' },
            { skill: 'Cookie', level: 'medium' },
            { skill: 'AJAX', level: 'high' },
          ],
        },
        {
          subcategory: 'Logging',
          items: [
            { skill: 'Logstash', level: 'medium' },
            { skill: 'Elasticsearch', level: 'medium' },
            { skill: 'Kibana', level: 'medium' },
          ],
        },
        {
          subcategory: 'Metrics',
          items: [
            { skill: 'Grafana', level: 'medium' },
            { skill: 'Prometheus', level: 'medium' },
          ],
        },
        {
          subcategory: 'Cache',
          items: [
            { skill: 'CDN', level: 'medium' },
            { skill: 'Memcached', level: 'medium' },
          ],
        },
        {
          subcategory: 'Version Control',
          items: [
            { skill: 'Git Basics', level: 'high' },
            { skill: 'Branching and Merging', level: 'medium' },
            { skill: 'Rebasing', level: 'medium' },
            { skill: 'Conflict Resolution', level: 'medium' },
            { skill: 'Pull Requests', level: 'high' },
            { skill: 'Git Workflow Strategies', level: 'medium' },
          ],
        },
        {
          subcategory: 'Testing',
          items: [
            { skill: 'Integrational tests', level: 'medium' },
            { skill: 'Module tests', level: 'medium' },
            { skill: 'Nagruzochnoe tests', level: 'low' },
            { skill: 'Functional tests', level: 'medium' },
          ],
        },
        {
          subcategory: 'Linux',
          items: [
            { skill: 'Basic Shell Commands', level: 'medium' },
            { skill: 'File and Directory Management', level: 'medium' },
            { skill: 'Process Management', level: 'medium' },
            { skill: 'Permissions and Ownership', level: 'medium' },
            { skill: 'Package Management', level: 'medium' },
            { skill: 'System Monitoring', level: 'medium' },
            { skill: 'Networking Basics', level: 'medium' },
            { skill: 'Cron and crontab', level: 'medium' },
          ],
        },
        {
          subcategory: 'Auth',
          items: [
            { skill: 'JWT', level: 'high' },
            { skill: 'Oauth', level: 'medium' },
            { skill: 'Basic auth', level: 'medium' },
            { skill: 'Token auth', level: 'medium' },
            { skill: 'Cookie based auth', level: 'medium' },
          ],
        },
        {
          subcategory: 'Web security',
          items: [
            { skill: 'Auth', level: 'medium' },
            { skill: 'Sql-injections', level: 'medium' },
            { skill: 'XSS', level: 'medium' },
            { skill: 'CSRF', level: 'medium' },
          ],
        },
      ],
    },
  ];

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <h1 className="skills-title">Навыки</h1>
      {skillsData.map((category, index) => (
        <div key={index} className="skills-category">
          <h2 className="category-title">{category.category}</h2>
          {category.skills.map((subcategory, subIndex) => (
            <div key={subIndex} className="subcategory">
              <h3 className="subcategory-title">{subcategory.subcategory}</h3>
              <div className="skills-list">
                {subcategory.items.map((item, skillIndex) => {
                  if ('items' in item && Array.isArray(item.items)) {
                    return (
                      <div key={skillIndex} className="skill-nested">
                        <strong>{item.skill}:</strong>
                        <div className="skills-sublist">
                          {item.items.map((nestedSkill, nestedIndex) => (
                            <div key={nestedIndex} className="skill">
                              <span className="skill-name">{nestedSkill.skill}</span>
                              <span
                                className="skill-level"
                                style={{
                                  borderColor: levelColors[nestedSkill.level],
                                  color: levelColors[nestedSkill.level],
                                }}
                              >
                                {nestedSkill.level}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  // Обычные skills
                  const skill = item as SkillItem;
                  return (
                    <div key={skillIndex} className="skill">
                      <span className="skill-name">{skill.skill}</span>
                      <span
                        className="skill-level"
                        style={{
                          borderColor: levelColors[skill.level],
                          color: levelColors[skill.level],
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
