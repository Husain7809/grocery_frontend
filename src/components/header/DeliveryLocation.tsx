const DeliveryLocation = () => {
    
  return (
    <div>
        {/* Delivery and Location */}
        <div className="lg:flex gap-3 hidden">
            <div className="flex items-center">
                {/* {isDisabled ? ( */}
                    <span className="text-gray-400 disabled">Delivery to</span>
                {/* ) : '' } */}
            </div>
            <div className="flex items-center gap-1">
                <span><img src="/public/icons/Location-icon.svg" alt="Location-Icon" className="w-5" /></span>
                <span className="text-white">Berkshire. RG42 3DH</span>
            </div>
        </div>
    </div>
  )
}

export default DeliveryLocation
