import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TopicWithTag } from 'src/app/core/interfaces/topic-with-tag';
import { TopicWithTagService } from 'src/app/core/services/topic-with-tag.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit, OnDestroy, AfterViewInit {
  topicList: TopicWithTag[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private topicWithTagService: TopicWithTagService
  ){}

  ngAfterViewInit(): void {
    this.initializeSlider();
  }

  ngOnInit() {
    this.loadTopicsWithTag();
  }

  loadTopicsWithTag(): void {
    this.topicWithTagService.getTopicWithTag().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.topicList = data;
        setTimeout(() => {
          this.initializeSlider();
        });
      },
      error: () => {
        alert('Failed to load topics. Please try again later.');
      }
    });
  }

  initializeSlider(): void {
    const slider = document.querySelector('[data-slider]') as HTMLElement;
    const sliderContainer = document.querySelector('[data-slider-container]') as HTMLElement;
    const sliderPrevBtn = document.querySelector('[data-slider-prev]') as HTMLElement;
    const sliderNextBtn = document.querySelector('[data-slider-next]') as HTMLElement;

    let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue('--slider-items'));
    let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    let currentSlidePos = 0;

    const moveSliderItem = () => {
      const children = Array.from(sliderContainer.children) as HTMLElement[];
      sliderContainer.style.transform = `translateX(-${children[currentSlidePos].offsetLeft}px)`;
    };

    const slideNext = () => {
      if (currentSlidePos >= totalSlidableItems) {
        currentSlidePos = 0;
      } else {
        currentSlidePos++;
      }
      moveSliderItem();
    };

    const slidePrev = () => {
      if (currentSlidePos <= 0) {
        currentSlidePos = totalSlidableItems;
      } else {
        currentSlidePos--;
      }
      moveSliderItem();
    };

    sliderNextBtn?.addEventListener('click', slideNext);
    sliderPrevBtn?.addEventListener('click', slidePrev);

    window.addEventListener('resize', () => {
      totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue('--slider-items'));
      totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
      moveSliderItem();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
