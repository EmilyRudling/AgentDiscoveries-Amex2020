package org.softwire.training.api.integration;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.softwire.training.api.integration.helper.LoginHelper;
import org.softwire.training.api.integration.helper.WebDriverHelper;

import static org.junit.jupiter.api.Assertions.assertTrue;

//tests that users signed in as admin can view, edit and add regions

public class AdminRegionsIT {
    public static final String TARGET_ADDRESS = System.getProperty("target.address");

    private static WebDriver driver;

    @BeforeAll
    public static void setUp() {
        driver = WebDriverHelper.getSharedDriver();
    }

    @Test
    public void testAdminCanSeeRegions() {
        driver.get(TARGET_ADDRESS);
        LoginHelper.ensureLoggedIn(driver);
        LoginHelper.login(driver);
        driver.get(TARGET_ADDRESS + "/#/admin/regions");

        WebElement navBarRight = driver.findElement(By.className("navbar-right"));
        assertTrue(navBarRight.getText().contains("Log Out"));
    }

    @Test
    public void testAdminCanEditRegion() {
        driver.get(TARGET_ADDRESS);
        LoginHelper.ensureLoggedIn(driver);
        LoginHelper.login(driver);
        driver.get(TARGET_ADDRESS + "/#/admin/regions/edit/1");
    }

    @Test
    public void testAdminCanAddRegion() {
        driver.get(TARGET_ADDRESS);
        LoginHelper.ensureLoggedIn(driver);
        LoginHelper.login(driver);
        driver.get(TARGET_ADDRESS + "/#/admin/regions/add");
    }
}
