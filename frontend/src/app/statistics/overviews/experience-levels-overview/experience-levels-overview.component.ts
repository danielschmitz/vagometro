import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Job } from 'src/app/job/job.types';
import { JobService } from 'src/app/job/job.service';
import { StatisticsService } from '../../statistics.service';
import { PublicationChartComponent } from '../../charts/publication-chart/publication-chart.component';
import { CompaniesRankComponent } from '../../ranks/companies-rank/companies-rank.component';
import { KeywordsRankComponent } from '../../ranks/keywords-rank/keywords-rank.component';
import { WorkplaceRankComponent } from '../../ranks/workplace-rank/workplace-rank.component';
import { JobListComponent } from 'src/app/job/job-list/job-list.component';
import { TypeRankComponent } from '../../ranks/type-rank/type-rank.component';
import { trackByExperienceLevel } from 'src/app/shared/track-by-functions';
import { EducationRankComponent } from '../../ranks/education-rank/education-rank.component';
import { LanguagesRankComponent } from '../../ranks/languages-rank/languages-rank.component';
import { JobPostingsComparisonComponent } from '../../comparisons/job-postings-comparison/job-postings-comparison.component';
import { ExperienceLevelData, ExperienceLevels } from 'src/app/shared/keywords-matcher/experience-levels.data';

@Component({
  selector: 'vgm-experience-levels-overview',
  standalone: true,
  imports: [
    CommonModule,
    PublicationChartComponent,
    CompaniesRankComponent,
    KeywordsRankComponent,
    WorkplaceRankComponent,
    JobListComponent,
    TypeRankComponent,
    EducationRankComponent,
    LanguagesRankComponent,
    JobPostingsComparisonComponent,
  ],
  templateUrl: './experience-levels-overview.component.html',
  styleUrls: ['./experience-levels-overview.component.scss'],
})
export class ExperienceLevelsOverviewComponent implements OnInit {
  experienceLevelsRank$!: Observable<ExperienceLevelData[]>;
  jobsQuantity!: number;
  selectedLevel!: ExperienceLevels;
  jobsByExperienceLevel$!: Observable<Job[]>;

  trackByExperienceLevel = trackByExperienceLevel;

  constructor(
    private statisticsService: StatisticsService,
    private jobService: JobService,
  ) {}

  ngOnInit(): void {
    this.experienceLevelsRank$ = this.statisticsService.getExperienceLevelsRank();

    this.experienceLevelsRank$.subscribe((experienceLevelsRank) => {
      this.selectedLevel = experienceLevelsRank[0].level;
      this.jobsByExperienceLevel$ = this.jobService.getJobsByExperienceLevel(this.selectedLevel);
    });

    this.jobService.jobs$.subscribe((jobs) => {
      this.jobsQuantity = jobs?.length || 0;
    });
  }

  onExperienceLevelClick(experienceLevel: ExperienceLevels): void {
    this.selectedLevel = experienceLevel;
    this.jobsByExperienceLevel$ = this.jobService.getJobsByExperienceLevel(this.selectedLevel);
  }
}
