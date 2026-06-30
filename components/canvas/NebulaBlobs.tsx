export function NebulaBlobs() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
      <div
        className="animate-drift1 absolute -top-[15%] -left-[10%] h-[500px] w-[600px] rounded-full opacity-[0.22] blur-[10px]"
        style={{
          background:
            "radial-gradient(ellipse, var(--violet), transparent 70%)",
        }}
      />
      <div
        className="animate-drift2 absolute -right-[5%] -bottom-[10%] h-[460px] w-[500px] rounded-full opacity-[0.16] blur-[10px]"
        style={{
          background: "radial-gradient(ellipse, var(--cyan), transparent 70%)",
        }}
      />
    </div>
  );
}
