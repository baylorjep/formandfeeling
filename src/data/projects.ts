export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  details?: {
    location?: string;
    scope?: string;
    approach?: string;
    services?: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Coastal Living Room Direction',
    category: 'Living Space',
    description: 'Strategic guidance for a light-filled living room, including layout optimization, palette development, and furniture recommendations that balance coastal ease with refined comfort.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    details: {
      location: 'San Francisco, CA',
      scope: 'Design direction and styling guidance',
      approach: 'The client had beautiful bones but felt stuck on how to bring warmth without losing the airy feel. We developed a cohesive direction that honored both.',
      services: ['Space Planning', 'Furniture Recommendations', 'Color Direction', 'Styling Guidance']
    }
  },
  {
    id: 2,
    title: 'Kitchen Design Consultation',
    category: 'Kitchen',
    description: 'Comprehensive consulting for a kitchen renovation, providing finish selection guidance, layout optimization, and material direction that balanced functionality with timeless appeal.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    details: {
      location: 'Palo Alto, CA',
      scope: 'Full kitchen design direction',
      approach: 'Working alongside the client and their contractor, we provided clear design direction that streamlined decision-making and ensured a cohesive result.',
      services: ['Layout Consulting', 'Finish Selection', 'Countertop Direction', 'Lighting Guidance']
    }
  },
  {
    id: 3,
    title: 'Primary Bedroom Clarity',
    category: 'Bedroom',
    description: 'Design consulting focused on creating a serene retreat, with guidance on color, textiles, and furniture placement that supports rest and personal sanctuary.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      location: 'Berkeley, CA',
      scope: 'Bedroom design direction',
      approach: 'The client wanted a calming space but struggled to define what that meant for them. Through discovery, we identified their vision and built a clear path forward.',
      services: ['Color Consulting', 'Furniture Recommendations', 'Textile Direction', 'Lighting Guidance']
    }
  },
  {
    id: 4,
    title: 'Dining Room Transformation',
    category: 'Dining',
    description: 'Strategic direction for an intimate dining space, guiding the client through table selection, lighting decisions, and finish choices that create warmth for gatherings.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      location: 'Oakland, CA',
      scope: 'Dining room design direction',
      approach: 'This project centered on empowering the client to make confident choices about furnishings and finishes, with our guidance ensuring cohesion.',
      services: ['Furniture Direction', 'Lighting Consulting', 'Finish Selection', 'Styling Guidance']
    }
  },
  {
    id: 5,
    title: 'Home Office Strategy',
    category: 'Office',
    description: 'Consulting for a productive yet aesthetically pleasing workspace, including layout optimization, storage solutions, and design choices that inspire focus.',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      location: 'San Jose, CA',
      scope: 'Home office design direction',
      approach: 'Balancing function and form, we helped the client navigate the challenge of creating a space that supports productivity while feeling like home.',
      services: ['Layout Optimization', 'Furniture Recommendations', 'Storage Solutions', 'Ergonomic Guidance']
    }
  },
  {
    id: 6,
    title: 'Bathroom Finish Guidance',
    category: 'Bathroom',
    description: 'Detailed consulting on bathroom finishes, fixtures, and material selection, guiding the client through decisions that create a cohesive, spa-like atmosphere.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: {
      location: 'Marin County, CA',
      scope: 'Bathroom design direction',
      approach: 'With countless tile and fixture options, the client felt overwhelmed. We provided a curated framework that simplified choices without sacrificing quality.',
      services: ['Finish Selection', 'Fixture Direction', 'Tile Consulting', 'Lighting Guidance']
    }
  },
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: number) => {
  return projects.find(project => project.id === id);
};
