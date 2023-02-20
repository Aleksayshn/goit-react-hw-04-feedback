export const colorPicker = color => {
  switch (color) {
    case 'good':
      return '#00b894';
    case 'neutral':
      return '#ffeaa7';
    case 'bad':
      return '#d63031';
    default:
      return '#303030';
  }
};

