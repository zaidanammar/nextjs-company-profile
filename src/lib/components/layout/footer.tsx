export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-indigo-600 text-white py-10 px-6 text-center"
    >
      <h3 className="text-xl font-semibold mb-2">Hubungi Kami</h3>
      <p className="opacity-90 mb-4">support@tokosatu.id | +62 812 3456 7890</p>

      <div className="flex justify-center gap-4 mb-4">
        <a href="#/instagram" className="hover:underline">
          Instagram
        </a>
        <a href="#/facebook" className="hover:underline">
          Facebook
        </a>
        <a href="#/whatsapp" className="hover:underline">
          WhatsApp
        </a>
      </div>

      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} Toko Satu. Semua hak dilindungi.
      </p>
    </footer>
  );
}
