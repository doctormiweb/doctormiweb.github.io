(async function(){const p=window.location.pathname.match(/\/perfil\/([a-z0-9-]+)\/?$/i);if(!p)return;const s=p[1],o=document.getElementById("default-404"),t=document.getElementById("fallback-loading"),a=document.getElementById("fallback-profile");o&&(o.style.display="none"),t&&(t.style.display="block");try{const d=await fetch("https://nshpmhwxwloilzdykduf.supabase.co/rest/v1/rpc/get_doctor_public_profile",{method:"POST",headers:{apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaHBtaHd4d2xvaWx6ZHlrZHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NzA1MTksImV4cCI6MjA2NjQ0NjUxOX0.gOQy3wa0HnYf5Zz5VJd6EAGhT0EbmGxwvJime9EKuwQ","Content-Type":"application/json"},body:JSON.stringify({p_slug_or_id:s})});if(!d.ok)throw new Error("Not found");const n=await d.json(),e=Array.isArray(n)?n[0]:n;if(!e||!e.id)throw new Error("Doctor not found");const i=l=>String(l??"").replace(/[&<>"']/g,u=>`&#${u.charCodeAt(0)};`),r=String(e.full_name||"Professional Mèdic");document.title=`${r} | DoctorMi`;const c=i(r),f=/^https:\/\//i.test(String(e.avatar_url||""))?i(e.avatar_url):"",x=`com.arnohealth.doctormi://perfil/${encodeURIComponent(e.slug||s)}`,g="https://play.google.com/store/apps/details?id=com.arnohealth.doctormi",y="https://apps.apple.com/app/doctormi/id6747891777",m=r.split(" ").filter(Boolean).slice(0,2).map(l=>l[0].toUpperCase()).join("");t&&(t.style.display="none"),a&&(a.style.display="block",a.innerHTML=`
            <div style="max-width: 860px; margin: 40px auto 60px; padding: 0 20px;">
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; box-shadow: 0 12px 36px rgba(23, 32, 31, 0.06); overflow: hidden;">
                <div style="padding: 40px 30px 30px; background: linear-gradient(180deg, rgba(221, 243, 238, 0.45) 0%, rgba(255, 253, 248, 0) 100%); display: flex; flex-direction: column; align-items: center; text-align: center;">
                  <div style="width: 104px; height: 104px; border-radius: 50%; background: #ddf3ee; color: #09544f; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: 700; border: 3px solid #ffffff; box-shadow: 0 6px 18px rgba(14, 124, 115, 0.15); overflow: hidden;">
                    ${f?`<img src="${f}" alt="${c}" style="width:100%; height:100%; object-fit:cover;" />`:`<span>${i(m)||"Dr"}</span>`}
                  </div>
                  <div style="margin-top: 16px;">
                    <p style="font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #0e7c73; margin-bottom: 6px;">Metge especialista</p>
                    <h1 style="font-size: 34px; margin: 0 0 6px; color: #17201f; line-height: 1.15;">${c}</h1>
                    ${e.specialization?`<p style="font-size: 18px; color: #40504d; margin: 0 0 14px; font-weight: 500;">${i(e.specialization)}</p>`:""}
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                      <span style="display: inline-flex; align-items: center; padding: 4px 12px; background: #ddf3ee; color: #09544f; font-size: 13px; font-weight: 600; border-radius: 20px;">Consulta online</span>
                      <span style="display: inline-flex; align-items: center; padding: 4px 12px; background: #ddf3ee; color: #09544f; font-size: 13px; font-weight: 600; border-radius: 20px;">Videoconsulta</span>
                      ${e.professional_registration_number?`<span style="display: inline-flex; align-items: center; padding: 4px 12px; background: #f1f5f9; color: #475569; font-size: 13px; font-weight: 600; border-radius: 20px;">Col·legiat núm. ${i(e.professional_registration_number)}</span>`:""}
                    </div>
                  </div>
                </div>

                <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; padding: 24px 30px; background: #f8fafc; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                  <div style="text-align: center;">
                    <strong style="color: #17201f; font-size: 16px;">Vols contactar o iniciar una consulta?</strong>
                    <p style="margin: 4px 0 0; font-size: 15px; color: #40504d;">Pots xatejar i consultar directament a través de l'aplicació oficial DoctorMi.</p>
                  </div>
                  <div>
                    <a href="${x}" style="display: inline-flex; align-items: center; gap: 10px; background: #0e7c73; color: white; padding: 12px 24px; font-size: 16px; font-weight: 700; border-radius: 10px; text-decoration: none;">
                      <span>Obrir a l'app DoctorMi</span>
                    </a>
                  </div>
                </div>

                <div style="padding: 36px 30px;">
                  ${e.bio?`<div style="margin-bottom: 36px;"><h2 style="font-size: 22px; margin-bottom: 14px; color: #17201f;">Sobre mi</h2><p style="font-size: 17px; line-height: 1.65; color: #40504d;">${i(e.bio)}</p></div>`:""}

                  <div style="padding: 30px; background: #ddf3ee; border-radius: 16px; text-align: center;">
                    <h2 style="font-size: 22px; margin-bottom: 10px; color: #09544f;">Encara no tens DoctorMi al teu mòbil?</h2>
                    <p style="max-width: 540px; margin: 0 auto 20px; font-size: 15px; color: #09544f;">Descarrega l'aplicació gratuïtament per a iPhone o Android. Un cop instal·lada, l'enllaç del doctor s'obrirà automàticament al teu dispositiu.</p>
                    <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
                      <a href="${y}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 10px; background: #0f172a; color: white; padding: 10px 20px; border-radius: 10px; text-decoration: none; font-weight: 600;">App Store</a>
                      <a href="${g}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 10px; background: #0f172a; color: white; padding: 10px 20px; border-radius: 10px; text-decoration: none; font-weight: 600;">Google Play</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `)}catch{t&&(t.style.display="none"),o&&(o.style.display="block")}})();
