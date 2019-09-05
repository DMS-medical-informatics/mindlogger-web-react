import React from 'react';
import AppletListItem from '../../components/AppletListItem';
import { Link } from 'react-router-dom';

function Applets() {
  return (
    <div class="Item-list">
        <Link to="/activities" class="List-item-container">
          <AppletListItem/>
        </Link>
    </div>
  );
}

export default Applets;