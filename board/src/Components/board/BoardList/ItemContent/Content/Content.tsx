<div
  className={`${
    isLong && isUnFold ? "" : "h-boardContentHeight"
  } border-b-4 border-gray-300 border-double whitespace-pre-wrap overflow-hidden relative`}
>
  <span id={`${id}BoardItemContent`}>{content}</span>
  {isLong && !isUnFold ? (
    <div className="absolute w-full h-8 bottom-0 left-0 text-center bg-gray-200 border-t-2 border-gray-300">
      <button type="button" className="w-full h-full" onClick={clickUnFold}>
        전체보기
      </button>
    </div>
  ) : (
    ""
  )}
  {/* height를 구하는 함수가 필요, height에 따라서 해당 요소를 드러내주자. */}
</div>;
