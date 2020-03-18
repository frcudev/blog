import {TestBed, inject} from '@angular/core/testing';
import {ResponsiveLayoutService} from './responsive-layout.service';

describe('Service: ResponsiveLayout', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponsiveLayoutService],
    });
  });

  it('should ...', inject([ResponsiveLayoutService], (service: ResponsiveLayoutService) => {
    expect(service).toBeTruthy();
  }));
});
