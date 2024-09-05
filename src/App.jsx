import './App.css';
import { Navbar } from './components/navbar/navbar';
import { Start } from './components/start/start';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

export default function App() {
  
  return (
    <main>
      {/* Call Navbar element */}
      <Navbar />
      <div class="ALL">
        <Start />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
