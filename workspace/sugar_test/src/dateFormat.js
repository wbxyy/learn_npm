function dateFormat(date){
  const YYYY = date.getFullYear()
  const MM = padZero(date.getMonth() + 1)
  const DD = padZero(date.getDate())
  const hh = padZero(date.getHours())
  const mm = padZero(date.getMinutes())
  const ss = padZero(date.getSeconds())
  function padZero(v){
    return v>9 ? v : '0'+v
  }
  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`

}

module.exports = {
  dateFormat
}