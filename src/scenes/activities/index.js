import React from 'react';
import { Link } from 'react-router-dom';
import ActivityListItem from '../../components/ActivityListItem';



function Activities() {
  return (
    <div class="Item-list">
        <Link to="/applets" className="List-item-container">
          <ActivityListItem/>
        </Link>
    </div>
  );
}

export default Activities;