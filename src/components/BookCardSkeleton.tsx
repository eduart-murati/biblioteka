export default function BookCardSkeleton() {
  const skeletonClasses = `
    p-4 rounded-xl shadow-lg border border-gray-200
    bg-white dark:bg-gray-800 dark:border-gray-700
    min-h-[240px] w-full animate-pulse
  `;
  const lineClasses = "h-4 rounded bg-gray-300 dark:bg-gray-700";
  const buttonPlaceholder = "h-9 rounded-lg bg-gray-300 dark:bg-gray-700 flex-1";

  return (
    <div className={skeletonClasses}>
      <div className="space-y-3 flex flex-col h-full justify-between">
        {/* Skeleti i Titullit */}
        <div>
          <div className="h-6 w-3/4 rounded bg-gray-300 dark:bg-gray-700 mb-2"></div>
          <div className={`${lineClasses} w-full`}></div>
          <div className={`${lineClasses} w-2/3 mt-1`}></div>
        </div>
        
        {/* Skeleti i Përmbajtjes/Butonave */}
        <div className="pt-4 flex gap-2 justify-between">
          <div className={buttonPlaceholder}></div>
          <div className={buttonPlaceholder}></div>
        </div>
      </div>
    </div>
  );
}
