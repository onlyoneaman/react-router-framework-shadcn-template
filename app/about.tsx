import React from 'react';
import { Button } from 'app/components/ui/button';
import {Link} from "react-router";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gray-100 text-black">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-primary">About Us</h1>
          <p className="text-muted-foreground">Get to know our story and mission</p>
        </div>

        <div className="bg-card rounded-lg border shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-card-foreground">Our Story</h2>
          <p className="text-card-foreground/90">
            We're a passionate team dedicated to building innovative solutions that make a difference.
            Founded in 2023, we've been working tirelessly to create meaningful experiences for our users.
          </p>

          <h2 className="text-xl font-semibold text-card-foreground pt-2">Our Mission</h2>
          <p className="text-card-foreground/90">
            To empower individuals and organizations with intuitive tools that enhance productivity
            and foster creativity in an ever-evolving digital landscape.
          </p>

          <div className="pt-4 space-x-3">
            <Link to={'/contact'}>
              <Button
                variant='secondary'
              >
                Contact Us
              </Button>
            </Link>

            <Link to={'/'}>
              <Button
                variant='default'
              >
                Home
              </Button>
            </Link>

          </div>
        </div>

        <div className="bg-card rounded-lg border shadow-sm p-6">
          <h2 className="text-xl font-semibold text-card-foreground mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-accent/10 rounded-md">
              <h3 className="font-medium">Leadership</h3>
              <p className="text-sm text-muted-foreground">Guiding our vision with experience and insight</p>
            </div>
            <div className="p-4 bg-accent/10 rounded-md">
              <h3 className="font-medium">Development</h3>
              <p className="text-sm text-muted-foreground">Building the future with code and creativity</p>
            </div>
            <div className="p-4 bg-accent/10 rounded-md">
              <h3 className="font-medium">Design</h3>
              <p className="text-sm text-muted-foreground">Crafting beautiful and intuitive experiences</p>
            </div>
            <div className="p-4 bg-accent/10 rounded-md">
              <h3 className="font-medium">Support</h3>
              <p className="text-sm text-muted-foreground">Always here to help and guide our users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
