import { mockStudies } from '@/utils/mockData';
import StudyCard from '@/components/studyCard';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Conditional Prediction Market</h1>
      <p>Bet on the outcome of replication studies</p>
      <hr />

      {mockStudies.map((study, index) => (
        <StudyCard
          key={index}
          study={study}
        />
      ))}
    </div>
  );
};

export default HomePage;
