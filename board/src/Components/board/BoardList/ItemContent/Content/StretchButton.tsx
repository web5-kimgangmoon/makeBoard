{
  isLong && !isUnFold ? (
    <div className="absolute w-full h-8 bottom-0 left-0 text-center bg-gray-200 border-t-2 border-gray-300">
      <button type="button" className="w-full h-full" onClick={clickUnFold}>
        전체보기
      </button>
    </div>
  ) : (
    ""
  );
}
