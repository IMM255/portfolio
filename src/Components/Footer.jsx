import 'boxicons'
function Footer() {
  return (
    <footer className="bg-primary flex justify-between py-8 md:px-4 px-1
    ">
        <h5 className="text-xs">Copyright &copy; Muhammad Imam Arif Darmawan</h5>
        <div className='flex'>
            <a href=''><box-icon type='logo' name='linkedin-square'></box-icon></a>
            <a href=""><box-icon type='logo' name='github'></box-icon></a>
        </div>
        <div className="text-xs md:flex">
             <p>+62 813 2477 0103 |</p>
            <p> muhammadimamarif225@gmail.com</p>
        </div>
    </footer>
  )
}

export default Footer
