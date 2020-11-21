import React from 'react';
import { Sidebar } from './Sidebar';
import { MainContent } from "./MainContent";

export const Content = () => (
  <section className="content-wrapper">
    <Sidebar />
    <MainContent />
  </section>
);