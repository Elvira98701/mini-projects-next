"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { CalendarProps, Month } from "./types";
import { Button } from "../Button";

import styles from "./calendar.module.scss";

export const Calendar: React.FC<CalendarProps> = ({ className }) => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState<Month>(currentDate.getMonth() as Month);

  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  const getLastDayOfMonth = (year: number, month: Month): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getWeekDay = (year: number, month: Month, day: number): number => {
    const date = new Date(year, month, day);
    const weekday = date.getDay();
    return weekday === 0 ? 6 : weekday - 1;
  };

  const padArray = (
    arr: number[],
    left: number,
    right: number
  ): (string | number)[] => {
    const leftPadding = new Array(left).fill("");
    const rightPadding = new Array(right).fill("");
    return [...leftPadding, ...arr, ...rightPadding];
  };

  const splitIntoChunks = (
    arr: (string | number)[],
    chunkSize: number
  ): (string | number)[][] => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const renderDays = () => {
    const lastDay = getLastDayOfMonth(year, month);
    const days = Array.from({ length: lastDay }, (_, i) => i + 1);

    const firstWeekDay = getWeekDay(year, month, 1);
    const lastWeekDay = getWeekDay(year, month, lastDay);

    const daysData = splitIntoChunks(
      padArray(days, firstWeekDay, 6 - lastWeekDay),
      7
    );

    return daysData;
  };

  const handleNextMonth = () => {
    setMonth((prev) => (prev + 1 > 11 ? 0 : prev + 1) as Month);
    if (month === 11) setYear((prev) => prev + 1);
  };

  const handlePrevMonth = () => {
    setMonth((prev) => (prev - 1 < 0 ? 11 : prev - 1) as Month);
    if (month === 0) setYear((prev) => prev - 1);
  };

  const daysData = renderDays();

  return (
    <div className={clsx(className, styles.calendar)}>
      <div className={styles.calendarHeader}>
        <Button onClick={handlePrevMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        </Button>
        <span className={styles.calendarTitle}>
          {new Date(year, month).toLocaleDateString("en-US", dateFormatOptions)}
        </span>
        <Button onClick={handleNextMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </Button>
      </div>
      <table className={styles.calendarTable}>
        <thead>
          <tr>
            <th aria-label="Monday">Mo</th>
            <th aria-label="Tuesday">Tu</th>
            <th aria-label="Wednesday">We</th>
            <th aria-label="Thursday">Th</th>
            <th aria-label="Friday">Fr</th>
            <th aria-label="Saturday">Sa</th>
            <th aria-label="Sunday">Su</th>
          </tr>
        </thead>
        <tbody>
          {daysData.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td
                  key={j}
                  className={
                    day === currentDate.getDate() &&
                    year === currentDate.getFullYear() &&
                    month === currentDate.getMonth()
                      ? styles.active
                      : ""
                  }
                >
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
