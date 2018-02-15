import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomButtonComponent } from './zoom-button.component';

describe('ZoomButtonComponent', () => {
  let component: ZoomButtonComponent;
  let fixture: ComponentFixture<ZoomButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ZoomButtonComponent],

    })
      .compileComponents().then(() => {

        fixture = TestBed.createComponent(ZoomButtonComponent);
        component = fixture.componentInstance;

      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('- button should be clicked', async(() => {
    spyOn(component, 'decrement');

    let button = fixture.debugElement.nativeElement.querySelector('#dec');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.decrement).toHaveBeenCalled();
    });
  }));

  it('+ button should be clicked', async(() => {
    spyOn(component, 'increment');

    let button = fixture.debugElement.nativeElement.querySelector('#inc');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.increment).toHaveBeenCalled();
    });
  }));

  it('Hello World! Text Matching and Print in Console', () => {

    expect(component.helloWorld())
      .toEqual('Hello world!');
  });

  it('decrement() method return value should be 30', () => {

    expect(component.decrement())
      .toEqual(30);
  });

  it('increment() method return value should be 10', () => {

    expect(component.increment())
      .toEqual(10);
  });
});
