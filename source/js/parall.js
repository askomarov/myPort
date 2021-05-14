const onMoveParall = (item) => {
  const itemRect = item.getBoundingClientRect();

  item.addEventListener("mousemove", evt => {
    const xPosition = (evt.clientX - itemRect.left) / itemRect.width;
    const yPosition = (evt.clientY - itemRect.top) / itemRect.height - 0.6;

    const xOffset = -(xPosition - 0.6);

    const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6);

    item.style.transform = `perspective(1000px) rotateY(${dxNorm * 45}deg) rotateX(${yPosition * 45}deg)`
  })
};

const cancelParall = (item) => {
  item.addEventListener("mouseleave", () => {
    item.style.transform = 'none';
  })
};

export { onMoveParall, cancelParall }
