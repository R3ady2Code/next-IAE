export type ProgramType = {
  title: string;
  specializedSubjects: ModuleType[];
  id: string;
  baseSubjects?: [];
  category?: {};
  createdAt: string;
  diplomas?: [];
  duration?: string;
  goal: string;
  icon?: string;
  journal_articles?: [];
  locale: string;
  localizations?: [];
  picture?: {};
  programModulesCounters?: {};
  published_at: string;
  questions?: [];
  reviews?: [];
  slug: string;
  specializedSubjectsAddons?: string;
  studyFormat: string;
  subjectsStickerType: string;
  teachers?: [];
  updatedAt: string;
  whatWillYouLearn?: [];
  whoIsFor?: [];
};

export type ModuleType = {
  id: string;
  string: string;
  __v: number;
  _id: string;
};
