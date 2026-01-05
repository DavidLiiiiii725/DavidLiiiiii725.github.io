import React from "react";
import { createRoot } from "react-dom/client";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Terminal, 
  Cpu, 
  Video, 
  Globe, 
  Music, 
  Users, 
  Award, 
  Code2, 
  BrainCircuit, 
  Layout, 
  Database,
  ChevronDown,
  BookOpen
} from "lucide-react";

// --- Components ---

const Section = ({ title, icon: Icon, children, className = "" }: { title: string, icon: any, children?: React.ReactNode, className?: string }) => (
  <section className={`py-16 px-6 md:px-12 max-w-5xl mx-auto ${className}`}>
    <div className="flex items-center gap-3 mb-12">
      <div className="p-3 bg-violet-500/10 rounded-xl text-violet-400">
        <Icon size={28} />
      </div>
      <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
    </div>
    {children}
  </section>
);

const Card = ({ title, subtitle, date, location, details, icon: Icon }: { title: string, subtitle: string, date: string, location: string, details: string[], icon: any }) => (
  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5 group">
    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
      <div className="flex gap-4">
        {Icon && (
          <div className="mt-1 p-2 bg-slate-800 rounded-lg text-slate-400 group-hover:text-violet-400 transition-colors h-fit">
            <Icon size={20} />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-300 transition-colors">{title}</h3>
          <p className="text-violet-400 font-medium">{subtitle}</p>
        </div>
      </div>
      <div className="text-right md:text-right text-sm text-slate-500 pl-14 md:pl-0">
        <p className="font-mono">{date}</p>
        <p>{location}</p>
      </div>
    </div>
    <ul className="space-y-2 pl-14 md:pl-14 text-slate-400 leading-relaxed">
      {details.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="mt-2 w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillBar = ({ name, level, icon: Icon, color = "bg-violet-500" }: { name: string, level: number, icon: any, color?: string }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 text-slate-200 font-medium">
        {Icon && <Icon size={16} className="text-slate-400" />}
        {name}
      </div>
      <span className="text-xs font-mono text-slate-500">{level}%</span>
    </div>
    <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
      <div 
        className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`} 
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const TechBadge = ({ name }: { name: string }) => (
  <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-medium text-slate-300 hover:border-violet-500/50 hover:text-violet-300 transition-colors cursor-default">
    {name}
  </span>
);

// --- Main App ---

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-violet-500/30 selection:text-violet-200">
      
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-violet-600/20 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 border border-slate-800 rounded-full bg-slate-900/50 backdrop-blur-sm text-sm font-mono text-violet-400">
            Student • Developer • Drummer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Xudong <span className="gradient-text">Li</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Computer Science student at NYU Shanghai with a passion for AI agents, deep learning, and web data. 
            Blending code with creativity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="mailto:xl6232@nyu.edu" className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium transition-all transform hover:-translate-y-1">
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2 hover:text-slate-300 transition-colors">
              <Mail size={16} /> xl6232@nyu.edu
            </div>
            <div className="flex items-center gap-2 hover:text-slate-300 transition-colors">
              <MapPin size={16} /> Shanghai, China
            </div>
            <div className="flex items-center gap-2 hover:text-slate-300 transition-colors">
              <Phone size={16} /> +86 18038096364
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600">
          <ChevronDown size={24} />
        </div>
      </header>

      {/* Education Section */}
      <Section title="Education" icon={BookOpen} className="bg-slate-950">
        <div className="space-y-6">
          <Card 
            title="New York University, Shanghai"
            subtitle="Bachelor's Degree"
            date="Sept 2025 - Present"
            location="Shanghai, China"
            icon={Award}
            details={[
              "Cumulative GPA: 4.0",
              "Major: Computer Science (Intended)"
            ]}
          />
          <Card 
            title="Shenzhen Experimental High School"
            subtitle="High School Diploma"
            date="Sept 2022 - June 2025"
            location="Shenzhen, China"
            icon={BookOpen}
            details={[
              "Member of the Informatics Competition Team",
              "Completed rigorous high school curriculum with distinction"
            ]}
          />
        </div>
      </Section>

      {/* Skills Section - Visually Enhanced */}
      <Section title="Technical Skills" icon={Cpu} className="bg-slate-900/30 rounded-3xl my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Programming Languages */}
          <div>
            <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <Terminal size={20} className="text-emerald-400" />
              Programming
            </h3>
            <SkillBar name="Python" level={95} icon={Code2} color="bg-emerald-500" />
            <SkillBar name="C / C++" level={65} icon={Cpu} color="bg-blue-500" />
            <SkillBar name="HTML / CSS" level={75} icon={Layout} color="bg-orange-500" />
          </div>

          {/* AI & Data */}
          <div>
            <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <BrainCircuit size={20} className="text-violet-400" />
              AI & Data Engineering
            </h3>
            
            <div className="mb-6">
              <div className="text-slate-300 mb-3 text-sm font-medium">Web Scraping Ecosystem</div>
              <div className="flex flex-wrap gap-2">
                <TechBadge name="Scrapy" />
                <TechBadge name="BeautifulSoup" />
                <TechBadge name="Selenium" />
                <TechBadge name="Requests" />
                <TechBadge name="XPath" />
              </div>
            </div>

            <div className="mb-6">
              <div className="text-slate-300 mb-3 text-sm font-medium">Deep Learning Models</div>
              <div className="flex flex-wrap gap-2">
                <TechBadge name="RNN" />
                <TechBadge name="GAN" />
                <TechBadge name="Transformer" />
              </div>
            </div>

            <div>
              <div className="text-slate-300 mb-3 text-sm font-medium">AI Agents</div>
              <div className="flex flex-wrap gap-2">
                <TechBadge name="LangGraph" />
                <TechBadge name="AI Agents" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-12 border-t border-slate-800">
          {/* Software & Tools */}
          <div>
            <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <Layout size={20} className="text-pink-400" />
              Software & Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400"><Github size={18} /></div>
                <span className="font-medium">Git</span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400"><Video size={18} /></div>
                <span className="font-medium">Final Cut Pro X</span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Layout size={18} /></div>
                <span className="font-medium">Microsoft Office</span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-400"><Layout size={18} /></div>
                <span className="font-medium">Google Docs</span>
              </div>
            </div>
          </div>

          {/* Human Languages */}
          <div>
             <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <Globe size={20} className="text-indigo-400" />
              Languages
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-slate-900 p-4 rounded-xl border border-slate-800">
                <span className="font-medium text-slate-200">Chinese</span>
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold">Native</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="font-medium text-slate-200 block">English</span>
                  <span className="text-xs text-slate-500">IELTS Overall 8.0 | Speaking 7.5</span>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold">Fluent</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Leadership & Experience */}
      <Section title="Leadership & Involvement" icon={Users}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            title="NYU Shanghai MUN"
            subtitle="Member"
            date="Nov 2025 – Present"
            location="Shanghai, China"
            icon={Globe}
            details={[
              "Help organize regular training sessions.",
              "Instruction on MUN rules and procedures."
            ]}
          />
          <Card 
            title="Bucket Fruits Band"
            subtitle="Drummer / Co-founder"
            date="Oct 2025 – Present"
            location="Shanghai, China"
            icon={Music}
            details={[
              "Co-founder of the only freshman band at NYU Shanghai.",
              "Drummer for live performances.",
              "Performed at the Carnival of Terror, receiving positive reception."
            ]}
          />
          <Card 
            title="Informatics Team"
            subtitle="Member"
            date="Nov 2022 – Jan 2024"
            location="Shenzhen, China"
            icon={Code2}
            details={[
              "Trained with the school's Informatics team.",
              "Competed in Canadian Computing Competition.",
              "Earned the Distinction Prize."
            ]}
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Let's Connect</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:bg-violet-600 hover:text-white transition-all">
              <Mail size={24} />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:bg-gray-700 hover:text-white transition-all">
              <Github size={24} />
            </a>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Xudong Li. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);