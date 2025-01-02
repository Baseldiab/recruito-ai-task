// assets
import staticsImg from "@/assets/statics/statics-section-center.webp";

export default function StaticsSection() {
  return (
    <section className="-translate-y-1/2 lg:-translate-y-1/2 md:-translate-y-1/3 relative z-10 ">
      <div className="container bg-background-secondary rounded-section p-3">
        <h4 className="sm:text-sm text-xs uppercase text-text-secondary pb-3 text-center">
          See how we create an autonomous
          <span className="underline ms-1">ai agent</span>
        </h4>

        <figure className="relative">
          <img src={staticsImg} alt="statics" />
        </figure>
      </div>
    </section>
  );
}
