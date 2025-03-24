import {
  users, type User, type InsertUser,
  projects, type Project, type InsertProject,
  messages, type Message, type InsertMessage,
  skills, type Skill, type InsertSkill
} from "@shared/schema";

// Modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project methods
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
  
  // Message methods
  createMessage(message: InsertMessage): Promise<Message>;
  getAllMessages(): Promise<Message[]>;
  
  // Skill methods
  getAllSkills(): Promise<Skill[]>;
  getSkillsByCategory(category: string): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private messages: Map<number, Message>;
  private skills: Map<number, Skill>;
  
  private currentUserId: number;
  private currentProjectId: number;
  private currentMessageId: number;
  private currentSkillId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.messages = new Map();
    this.skills = new Map();
    
    this.currentUserId = 1;
    this.currentProjectId = 1;
    this.currentMessageId = 1;
    this.currentSkillId = 1;
    
    // Initialize with demo data
    this.initializeDemoData();
  }
  
  private initializeDemoData() {
    // Add demo projects
    const demoProjects: InsertProject[] = [
      {
        title: 'E-commerce Dashboard',
        description: 'A responsive admin dashboard for e-commerce platforms with analytics, inventory management, and order processing.',
        imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: ['ui-ux', 'frontend'],
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        completionLevel: 1,
        link: '/project/1'
      },
      {
        title: 'Health Tracker App',
        description: 'A mobile app design for tracking health metrics, exercises, and nutrition with personalized insights.',
        imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: ['ui-ux'],
        technologies: ['Figma', 'Prototyping', 'UI Design'],
        completionLevel: 2,
        link: '/project/2'
      },
      {
        title: 'Financial Advisory Platform',
        description: 'A comprehensive web application for financial advisors to manage clients, investments, and generate reports.',
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: ['frontend', 'fullstack'],
        technologies: ['Next.js', 'Node.js', 'MongoDB'],
        completionLevel: 3,
        link: '/project/3'
      }
    ];
    
    demoProjects.forEach(project => this.createProject(project));
    
    // Add demo skills
    const demoSkills: InsertSkill[] = [
      // Frontend skills
      { name: 'React.js', percentage: 90, category: 'frontend' },
      { name: 'JavaScript/TypeScript', percentage: 85, category: 'frontend' },
      { name: 'HTML/CSS/SASS', percentage: 95, category: 'frontend' },
      
      // Design skills
      { name: 'Figma', percentage: 95, category: 'design' },
      { name: 'Wireframing & Prototyping', percentage: 90, category: 'design' },
      { name: 'User Research', percentage: 85, category: 'design' },
      
      // Other skills
      { name: 'Git/GitHub', percentage: 90, category: 'tools' },
      { name: 'Responsive Design', percentage: 95, category: 'tools' },
      { name: 'Performance Optimization', percentage: 85, category: 'tools' }
    ];
    
    demoSkills.forEach(skill => this.createSkill(skill));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Project methods
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }
  
  async getProjectById(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }
  
  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      project => project.category.includes(category)
    );
  }
  
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const createdAt = new Date();
    const project: Project = { ...insertProject, id, createdAt };
    this.projects.set(id, project);
    return project;
  }
  
  async updateProject(id: number, updateData: Partial<InsertProject>): Promise<Project | undefined> {
    const existingProject = this.projects.get(id);
    if (!existingProject) return undefined;
    
    const updatedProject = { ...existingProject, ...updateData };
    this.projects.set(id, updatedProject);
    return updatedProject;
  }
  
  async deleteProject(id: number): Promise<boolean> {
    return this.projects.delete(id);
  }
  
  // Message methods
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.currentMessageId++;
    const createdAt = new Date();
    const message: Message = { ...insertMessage, id, createdAt };
    this.messages.set(id, message);
    return message;
  }
  
  async getAllMessages(): Promise<Message[]> {
    return Array.from(this.messages.values());
  }
  
  // Skill methods
  async getAllSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }
  
  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return Array.from(this.skills.values()).filter(
      skill => skill.category === category
    );
  }
  
  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const id = this.currentSkillId++;
    const skill: Skill = { ...insertSkill, id };
    this.skills.set(id, skill);
    return skill;
  }
  
  async updateSkill(id: number, updateData: Partial<InsertSkill>): Promise<Skill | undefined> {
    const existingSkill = this.skills.get(id);
    if (!existingSkill) return undefined;
    
    const updatedSkill = { ...existingSkill, ...updateData };
    this.skills.set(id, updatedSkill);
    return updatedSkill;
  }
}

export const storage = new MemStorage();
