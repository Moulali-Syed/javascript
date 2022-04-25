for (let count = 1; count <= 10; count++) {
  if (count == 5) {
    break;
  }
  if (count == 8) {
    continue;
  }
  document.write(count);
  for (let count1 = 1; count1 < 3; count1++) {
    document.write(count1);
  }
}
