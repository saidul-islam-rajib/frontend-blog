import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateDurationService {

  constructor() { }

  calculateWorkingDuration(startDate: Date, endDate: Date) : string{
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const yearPart = years > 0 ? `${years} Year${years > 1 ? 's' : ''}` : '';
    const monthPart = months > 0 ? `${months} Month${months > 1 ? 's' : ''}` : '';
    const dayPart = days > 0 ? `${days} Day${days > 1 ? 's' : ''}` : '';

    return `${yearPart} ${monthPart} ${dayPart}`.trim();
  }
}
