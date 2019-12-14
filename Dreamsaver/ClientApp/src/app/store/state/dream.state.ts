export interface IDreamsState {
  dreams: IDream[];
  selectedDream: IDream;
}

export const initialDreamsState: IDreamsState = {
  dreams: null,
  selectedDream: null,
};
