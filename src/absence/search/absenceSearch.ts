export interface AbsenceSearch {
  id?: bigint | null;
  dateAbsence: Date;
  matin?: boolean;
  apresMidi?: boolean;
  dateOperation?: Date;
  personnelId?: bigint;
}