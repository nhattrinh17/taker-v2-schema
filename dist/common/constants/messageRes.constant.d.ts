export declare const messageResponseError: {
    auth: {
        phoneOrPasswordWrong: string;
        phoneAlreadyExists: string;
        otpExpired: string;
        otpLimitExceeded: string;
        userNotFound: string;
        otpInvalid: string;
        otpAlreadySent: string;
        userNameAlreadyExists: string;
        refreshTokenInvalid: string;
        refreshTokenExpired: string;
        phoneAlreadyExistsOrNotMatch: string;
        stepInvalid: string;
        passwordInvalid: string;
        referralCodeNotFound: string;
        actionInvalid: string;
    };
    wallet: {
        customerNotFound: string;
        insufficientBalance: string;
        notFound: string;
        accessCodeInvalid: string;
        accessCodeExpired: string;
        partnerNotFound: string;
        actionInvalid: string;
        notEnoughBalance: string;
    };
    blog: {
        notFound: string;
        duplicate: string;
        missingDataRedirect: string;
        missingDataScreen: string;
    };
    blogCate: {
        notFound: string;
        duplicate: string;
    };
    voucher: {
        discountThan0: string;
        voucherNotFound: string;
        voucherAlreadyExits: string;
        cannotDeleteBecauseUsed: string;
        voucherExpired: string;
        voucherOutOfStock: string;
        voucherAlreadyUsed: string;
        voucherTypeInvalid: string;
        voucherPaymentMethodInvalid: string;
        voucherNotStarted: string;
        voucherMinimumOrderNotReached: string;
    };
    admin: {
        passSame: string;
        notFound: string;
        passInvalid: string;
        noChanges: string;
        lastAdminCannotDelete: string;
        userNameOrPasswordWrong: string;
        userNameAlreadyExists: string;
        actionInvalid: string;
    };
    customer: {
        notFound: string;
        actionInvalid: string;
        phoneAlreadyExists: string;
        passwordRequired: string;
        passwordSame: string;
        invalidPassword: string;
    };
    partner: {
        notFound: string;
        actionInvalid: string;
        phoneAlreadyExists: string;
        passwordRequired: string;
        passwordSame: string;
        invalidPassword: string;
        statusNotActive: string;
        invalidLocation: string;
        invalidOperatingHours: string;
        typeChangeNotAllowed: string;
    };
    upload: {
        fileInvalid: string;
    };
    transaction: {
        notFound: string;
        actionInvalid: string;
        sourceInvalid: string;
        withdrawNotAllowed: string;
        refundNotAllowed: string;
        evidenceAlreadyExists: string;
    };
    config: {
        notFound: string;
        keyExists: string;
    };
    permission: {
        actionNotFound: string;
        actionDuplicate: string;
        actionInUse: string;
        sysPermissionNotFound: string;
        sysPermissionDuplicate: string;
        sysPermissionInUse: string;
        groupRoleNotFound: string;
        groupRoleDuplicate: string;
        groupRoleInUse: string;
        sysPermissionActionNotFound: string;
        sysPermissionActionDuplicate: string;
        groupRolePermissionNotFound: string;
        groupRolePermissionDuplicate: string;
    };
    user: {
        notFound: string;
        permissionDenied: string;
    };
    address: {
        notFound: string;
        actionInvalid: string;
        defaultAddressExists: string;
        pickupAddressExists: string;
        returnAddressExists: string;
        branchAddressCannotBeDefault: string;
    };
    notification: {
        notFound: string;
    };
    shoeService: {
        customerIdNotAllowed: string;
        notFound: string;
        duplicateName: string;
    };
    shoeBooking: {
        notFound: string;
        actionInvalid: string;
        bookingDateTooClose: string;
        pickupAddressRequired: string;
        deliveryAddressRequired: string;
        returnAddressRequired: string;
        shoeServiceNotFound: string;
        imageUrlsInvalid: string;
        originalPriceAndShoeServiceDesRequired: string;
        accessCodeNotAllowed: string;
        notPendingPayment: string;
        fromDateAndToDateRequired: string;
        locked: string;
        processingImagesInvalid: string;
        completedImagesInvalid: string;
    };
    cancelOrder: {
        alreadyExists: string;
        notFound: string;
        reasonRequired: string;
        actionInvalid: string;
    };
    vehicleRegistry: {
        notFound: string;
        vehicleAlreadyExists: string;
        actionInvalid: string;
        licensePlateRequired: string;
        vehicleTypeRequired: string;
    };
    driver: {
        driverAlreadyExists: string;
        notFound: string;
    };
    rating: {
        idIsRequired: string;
        notFound: string;
        actionInvalid: string;
        shoeBookingIdRequired: string;
        ratingValueInvalid: string;
        commentTooLong: string;
        alreadyRated: string;
    };
    conversation: {
        notFound: string;
        actionInvalid: string;
        participantsRequired: string;
        groupNameRequired: string;
        groupNameTooLong: string;
        groupNameInvalid: string;
        participantsNotFound: string;
        notMember: string;
        alreadyMember: string;
    };
};
