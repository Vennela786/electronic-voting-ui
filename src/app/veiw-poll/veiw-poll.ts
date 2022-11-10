import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './viewpoll';

export const viewPollMock = [
    {
        title: "title",
        startDate: "2022-11-10",
        endDate: "",
    }, {
        title: "title",
        startDate: "2022-11-10",
        endDate: "",
    }, {
        title: "title",
        startDate: "2022-11-10",
        endDate: "",
    }, {
        title: "title",
        startDate: "2022-11-10",
        endDate: "",
    },

]

// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [FormsModule],
//       declarations: [ RegisterComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.debugElement.componentInstance;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });