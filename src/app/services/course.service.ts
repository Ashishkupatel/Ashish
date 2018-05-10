import { Injectable } from '@angular/core';
import { course } from '../course';

@Injectable()
export class CourseService {
  private course: course[];
  constructor() {
    this.course = [
      {
        image: "lapi3.png",
        name: "angular 4",
        price: 234,
        description: "a component based client application framework",
      },
      {
        image: "lapi2.jpg",
        name: "css",
        price: 3000,
        description: "a component based client application framework",
      },
      {
        image: "lapi.jpg",
        name: "html",
        price: 2342,
        description: "a component based client application framework",
      }
      ,
      {
        image: "lapi.jpg",
        name: "java script",
        price: 238,
        description: "a component based client application framework",
      },
      {
        image: "lapi4.png",
        name: "node js",
        price: 2000,
        description: "a component based client application framework",
      },
      {
        image: "lapi5.png",
        name: "angular 1",
        price: 1000,
        description: "a component based client application framework",
      }
    ]
  }
  getCourses(): course[] {
    return this.course;
  }
}
