import React, { useState, useMemo } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import RobotCard from '@/components/robots/RobotCard';
import RobotDetails from '@/components/robots/RobotDetails';
import RobotFilters from '@/components/robots/RobotFilters';
import NoRobotsFound from '@/components/robots/NoRobotsFound';
import { robotsData } from '@/data/robotsData';
import PageHero from '@/components/layout/PageHero';

const RobotsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRobot, setSelectedRobot] = useState(null);

  const categories = useMemo(() => ['All', ...new Set(robotsData.map(robot => robot.category))], []);

  const filteredRobots = useMemo(() => {
    return robotsData.filter(robot => {
      const matchesSearch = robot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        robot.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || robot.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleRobotClick = (robot) => {
    setSelectedRobot(robot);
    setTimeout(() => {
      const detailsElement = document.getElementById('robot-details');
      if (detailsElement) {
        detailsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="relative">
      <ParticleBackground />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <PageHero
            kicker="Robots"
            title="Robot collection"
            subtitle="Explore our diverse range of advanced robotic systems with unique capabilities and designs."
          />

          <RobotFilters
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {filteredRobots.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRobots.map((robot, index) => (
                <RobotCard
                  key={robot.id}
                  robot={robot}
                  onClick={handleRobotClick}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <NoRobotsFound />
          )}
        </div>
      </section>

      {selectedRobot && <RobotDetails robot={selectedRobot} />}
    </div>
  );
};

export default RobotsPage;