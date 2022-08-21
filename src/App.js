
import './App.css';

import { Route, Routes } from "react-router-dom";
import StyledTable from './components/pages/Table';
import { MultiSelect } from './components/input/input';
import Home from './components/pages/home/Home';
import DropDownMain from './components/pages/DropDownMain';


function App() {
  return (
  
    <Routes>
			<Route path="/" element={<Home />} exact />
			<Route path="/table" element={<StyledTable />} />
			<Route path="/dropdown" element={<DropDownMain />} />
			<Route path="/multiselect" element={<MultiSelect />} />
		</Routes> 

  );
}

export default App;
