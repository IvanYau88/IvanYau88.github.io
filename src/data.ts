import dataWH from './assets/projects/dataWH.jpg';
import weather from './assets/projects/Weather.jpg';
import sql from './assets/projects/SQL.jpg';
import tableau from './assets/projects/Tableu.jpg';
import excel from './assets/projects/Excel.jpg';
import python from './assets/projects/Python.jpg';

export const profile = {
  name: 'Ivan Yau',
  tagline: 'Data Analyst skilled in SQL, Tableau, Excel, and Python',
  email: 'ivanyau88@yahoo.com',
  phone: '(469) 207-9773',
  address: 'Allen, TX 75013',
  linkedin: 'https://www.linkedin.com/in/ivan-yau-658275271/',
  github: 'https://github.com/IvanYau88',
};

export const skills = ['SQL', 'Tableau', 'Excel', 'Python'];

export const projects = [
  { title: 'SQL Data Warehouse', description: 'End-to-End Data Warehouse Using Medallion Architecture to Transform ERP and CRM Data into Analytics-Ready Insights', link: 'https://github.com/IvanYau88/SQL-Data-Warehouse-Project', image: dataWH },
  { title: 'Weather Dashboard', description: 'Utilizing OpenMeteo API, Python, and PowerBI to create Data Visualization for Weather in Dallas, Houston, and Austin', link: 'https://app.powerbi.com/view?r=eyJrIjoiOTk2YTQ4ODktZWZjYy00Y2EyLWJiNjEtNjlhNWU2OWYyNjhiIiwidCI6IjhkMjgxZDFkLTljNGQtNGJmNy1iMTZlLTAzMmQxNWRlOWY2YyIsImMiOjN9', image: weather },
  { title: 'SQL Portfolio', description: 'A collection of SQL projects and queries.', link: 'https://github.com/IvanYau88/SQL', image: sql },
  { title: 'Tableau Portfolio', description: 'A collection of Tableau dashboards and visualizations.', link: 'https://public.tableau.com/app/profile/ivan.yau4203/vizzes', image: tableau },
  { title: 'Excel Portfolio', description: 'A collection of Excel projects and analyses.', link: 'https://github.com/IvanYau88/Excel', image: excel },
  { title: 'Python Portfolio', description: 'A collection of Python projects and analyses.', link: 'https://github.com/IvanYau88/Python', image: python },
];
