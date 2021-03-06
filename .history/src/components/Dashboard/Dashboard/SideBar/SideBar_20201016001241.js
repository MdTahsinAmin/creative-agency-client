import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faUserPlus,faCartPlus,faPlus,faLockAlt,faListAlt } from '@fortawesome/free-solid-svg-icons'
import RateReviewIcon from '@material-ui/icons/RateReview';

import './SideBar.css';
import { Link } from 'react-router-dom';

import * as FaIcon from 'react-icons/fa';
import {MdAdd} from "react-icons/md";
const SideBar = () => {
    return (
      <nav>
          <MdAdd></MdAdd>
      </nav>
    );
};

export default SideBar;