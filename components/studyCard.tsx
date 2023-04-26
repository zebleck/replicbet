import React from 'react';
import { Bet, Study } from '@/types/global';
import { mockUsers } from '@/utils/mockData';
import { format } from 'date-fns'

interface StudyCardProps {
  study: Study;
}

const StudyCard = ({ study }: StudyCardProps) => {
  
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4><a href={study.url}>{study.name}</a></h4>
      </div>
      <div className="card-body">
        <p className="card-text">{study.description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Likelihood:</strong>{' '}
            {study.likelihood}
          </li>
          <li className="list-group-item">
            <strong>Outcome:</strong>{' '}
            {study.outcome == null ? 'Pending' : study.outcome.result + " on " + format(study.outcome.date, 'dd.MM.yyyy')}
          </li>
          <li className="list-group-item">
            <strong>Bets:</strong>{' '}
            {
              study.bets.length > 0 ? (study.bets.map((bet, index) => (
                <span key={index} className="badge bg-primary me-1">
                  {mockUsers[index].username} ({bet.outcome.result})
                </span>
              ))
              ) : (
                <span>None</span>
              )
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudyCard;
